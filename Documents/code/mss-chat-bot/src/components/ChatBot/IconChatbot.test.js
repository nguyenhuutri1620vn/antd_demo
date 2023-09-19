import React from 'react';
import {configure, shallow} from 'enzyme';
import IconChatbot from './IconChatbot';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const setIsOpen = () => {};

const icon = <IconChatbot setIsOpen={setIsOpen}/>

test('check className affix-chatbot-icon', ()=> {
    const wrapper = shallow(icon);
    expect(wrapper.props().children.props.children.props.className).toBe('affix-chatbot-icon');
})

test('check onClick icon', ()=> {
    const wrapper = shallow(icon);
    expect(wrapper.props().children.props.children.props.children.props.onClick()).toBe(undefined);
})

test('check twoToneColor btn send message', ()=> {
    const wrapper = shallow(icon);
    expect(wrapper.props().children.props.children.props.children.props.children.props.twoToneColor).toBe('#1890FF');
})