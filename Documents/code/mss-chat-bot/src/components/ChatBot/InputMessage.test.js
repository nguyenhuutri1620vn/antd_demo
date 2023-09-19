import React from 'react';
import {configure, shallow} from 'enzyme';
import Input from './InputMessage';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const inputRef = {
    current: {
        focus: ()=> {}
    }
};

const input = (
    <Input 
        isOpen={true} 
        inputRef={inputRef} 
        submitMessage={[{text: 'Hello', sender: 'user'}]} 
        setIsOpen={()=>{}} 
        setSubmitMessage={()=>{}}/>
)
// const inputFalse = <Input isOpen={false} inputRef={inputRef} submitMessage={[{text: 'Hello', sender: 'user'}]} setIsOpen={()=>{}} setSubmitMessage={()=>{}}/>

test('check title Modal chatbot', ()=> {
    const wrapper = shallow(input);
    console.log(wrapper.props().children.props);
    expect(wrapper.props().children.props.title).toBe('Insight Assistant');
})

test('check width Modal chatbot', ()=> {
    const wrapper = shallow(input);
    expect(wrapper.props().children.props.width).toBe(600);
})

test('check onCancel Modal chatbot', ()=> {
    const wrapper = shallow(input);
    expect(wrapper.props().children.props.onCancel()).toBe(undefined);
})

test('check onKeyUp handle input chatbot', ()=> {
    const wrapper = shallow(input);
    expect(wrapper.props().children.props.footer.props.children[0].props.children.props.onKeyUp()).toBe(undefined);
})

test('check onChange handle input chatbot', ()=> {
    const wrapper = shallow(input);
    expect(wrapper.props().children.props.footer.props.children[0].props.children.props.onChange()).toBe(undefined);
})

test('check placeholder input chatbot', ()=> {
    const wrapper = shallow(input);
    expect(wrapper.props().children.props.footer.props.children[0].props.children.props.placeholder).toBe('Enter your message...');
})

test('check maxLength input chatbot', ()=> {
    const wrapper = shallow(input);
    expect(wrapper.props().children.props.footer.props.children[0].props.children.props.maxLength).toBe(500);
})

test('check onClick btn-submit chatbot', ()=> {
    const wrapper = shallow(input);
    expect(wrapper.props().children.props.footer.props.children[1].props.children.props.onClick()).toBe(undefined);
})