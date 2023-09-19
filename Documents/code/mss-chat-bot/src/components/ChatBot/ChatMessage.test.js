import React from 'react';
import {configure, shallow} from 'enzyme';
import ChatMessage from './ChatMessage';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const chatMessage = <ChatMessage submitMessage={[{text: 'Hello', sender: 'user'}]} isLoadingRespons={true} isOpen={true}/>
const chatMessageFalse = <ChatMessage submitMessage={[{text: 'Hello', sender: 'user'}]} isLoadingRespons={false} isOpen={false}/>
const chatMessageTrue = <ChatMessage submitMessage={[{text: 'Hello', sender: 'user'}]} isLoadingRespons={true} isOpen={false}/>

test('test id content chat message', ()=> {
    const wrapper = shallow(chatMessage);
    expect(wrapper.props().id).toBe('chatbot-messenge-chatbot-content');
});

test('test className bot', ()=> {
    const wrapper = shallow(chatMessageFalse);
    expect(wrapper.props().children[0].props.className).toBe('message message-chatbot');
});

test('test size avatar', ()=> {
    const wrapper = shallow(chatMessageTrue);
    expect(wrapper.props().children[0].props.children[0].props.children.props.size).toBe(40);
});

test('test className avatar', ()=> {
    const wrapper = shallow(chatMessageTrue);
    expect(wrapper.props().children[0].props.children[0].props.className).toBe('avatar-bot');
});


test('test className avatar', ()=> {
    const wrapper = shallow(chatMessageTrue);
    expect(wrapper.props().children[0].props.children[1].props.className).toBe('messenge-content');
});