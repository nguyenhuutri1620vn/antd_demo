import React, { FC, PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { Button, Col, Input, Modal, Row } from 'antd';
import { MinusOutlined, SendOutlined } from '@ant-design/icons';
import ChatMessage from './ChatMessage';
import services from '../../services/InputServices';

export interface IInputProps {
    submitMessage: any[]
    inputRef: any
    isOpen: boolean
    isLoadingRespons: boolean,
    setIsOpen: (value: boolean) => void;
    setSubmitMessage: (value: any) => void;
    setIsLoadingRespons: (value: boolean) => void;
}

const Chatbot: FC<PropsWithChildren<IInputProps>> = ({ inputRef, isOpen, isLoadingRespons, setIsOpen, submitMessage, setSubmitMessage, setIsLoadingRespons }: any) => {
    const [valueMessage, setValueMessage] = useState<string>('');

    const input = {
        valueMessage,
        isLoadingRespons,
        setIsOpen,
        setSubmitMessage,
        setValueMessage,
        setIsLoadingRespons,
    }

    const {
        sendMessage,
        handleInput
    } = useMemo(() => {
        return services(input);
    }, [...Object.values(input)]);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef?.current?.focus({
                cursor: 'end',
            }), 100);
        }
    }, [isOpen, inputRef]);

    return (
        <>
            <Modal
                title="Insight Assistant"
                key="modal-chatbot"
                width={600}
                wrapClassName='chatbot-modal'
                style={{ position: 'absolute', bottom: 0, right: 16, padding: 0 }}
                open={isOpen}
                onCancel={() => setIsOpen(false)}
                closeIcon={<MinusOutlined />}
                footer={
                    <Row>
                        <Col span={22}>
                            <Input
                                placeholder='Enter your message...'
                                style={{ borderRadius: 20, background: '#F0F0F0', color: '#262626', height: 40 }}
                                ref={inputRef}
                                maxLength={500}
                                showCount
                                onChange={handleInput}
                                value={valueMessage}
                                onKeyUp={(e) => sendMessage(e, 'key')}
                            />
                        </Col>
                        <Col span={1} style={{ marginLeft: '6px' }}>
                            <Button style={{ borderRadius: 100, height: 40 }} type='primary' onClick={(e) => sendMessage(e, 'mouse')} disabled={isLoadingRespons}>
                                <SendOutlined style={{ fontSize: 22, margin: '-7px', paddingTop: '9px', paddingLeft: '3px' }} />
                            </Button>
                        </Col>
                    </Row>
                }>
                <ChatMessage
                    isOpen={isOpen}
                    isLoadingRespons={isLoadingRespons}
                    submitMessage={submitMessage}
                />
            </Modal>
        </>
    );
};

export default Chatbot;
