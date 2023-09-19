import React, { FC, PropsWithChildren, useEffect } from 'react';
import { RobotOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Col, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { getTypeReponse } from '../AnswerType';

export interface IChatMessage {
    isOpen: boolean
    isLoadingRespons: boolean
    submitMessage: any[]
}

const ChatMessage: FC<PropsWithChildren<IChatMessage>> = ({ isOpen, isLoadingRespons, submitMessage }: any) => {
    useEffect(() => {
        let objDiv = document.querySelector('.ant-modal-body');
        if (objDiv !== null) {
            objDiv.scrollTop = objDiv.scrollHeight;
        }
    }, [isOpen, submitMessage]);

    return (
        <Content key="chatbot-messenge-chatbot-content" id="chatbot-messenge-chatbot-content">
            <Row key="default-message" className='message-chatbot message-bot'>
                <Col span={2} className='avatar-bot'>
                    <Avatar icon={<RobotOutlined />} size={40} />
                </Col>
                <Col span={21} className='messenge-content'>
                    <p>
                        Hi there. Feel free to ask me any question
                    </p>
                </Col>
            </Row>
            {
                submitMessage?.map((message: any, index: number) => {
                    return (
                        message?.sender === 'user' ?
                            <>
                                <Row key={index} className={`message-chatbot message-user`}>
                                    <Col span={22} className='messenge-content' style={{ paddingRight: '5px', boxSizing: 'border-box' }}>
                                        <p >
                                            {message?.text}
                                        </p>
                                    </Col>
                                    <Col span={2} className='avatar-chatbot-user'>
                                        <Avatar icon={<UserOutlined />} size={40} />
                                    </Col>
                                </Row>
                            </>
                            :
                            <Row key={index} className={`message-chatbot message-bot`}>
                                <Col span={2} className='avatar-bot'>
                                    <Avatar icon={<RobotOutlined />} size={40} />
                                </Col>
                                <Col span={21} className='messenge-content'>
                                    <p>
                                        {getTypeReponse(message.json)(message)}
                                    </p>
                                </Col>
                            </Row>
                    )
                })
            }
            {isLoadingRespons &&
                <Row className={`message-chatbot message-bot`}>
                    <Col span={2} className='avatar-bot' >
                        <Avatar icon={<RobotOutlined />} size={40} />
                    </Col>
                    <Col span={21} style={{ background: '#E4E6EB', padding: '10px', borderRadius: 50, maxWidth: 50 }}>
                        <div className="chatbot-typing" >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Col>
                </Row>}
        </Content>
    );
};

export default ChatMessage;
