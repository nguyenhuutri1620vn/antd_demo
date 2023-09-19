import React, { useEffect, useRef, useState } from 'react';
import IconChatBot from './ChatBot/IconChatbot';
import InputMessage from './ChatBot/InputMessage';

import '../styles/index.scss';
import axios from 'axios';

const App = () => {
    const inputRef = useRef(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [submitMessage, setSubmitMessage] = useState<any>([]);
    const [isLoadingRespons, setIsLoadingRespons] = useState<boolean>(false);
    const [showMePermission, setShowMePermission] = useState<boolean>(false);

    const checkPermission = async () => {
        try {
            const response: any = await axios.post('http://172.16.9.47:8989/token/validate', { Token: localStorage.getItem('Token') });
            if (response?.data.IsValid === true) {
                if (response.data.ShowMeLv1 && response.data.ShowMeLv2) {
                    localStorage.setItem('se_permission', 'all');
                    setShowMePermission(true);
                } else if (response.data.ShowMeLv1 && !response.data.ShowMeLv2) {
                    localStorage.setItem('se_permission', 'level_1');
                    setShowMePermission(true);
                } else if (!response.data.ShowMeLv1 && response.data.ShowMeLv2) {
                    localStorage.setItem('se_permission', 'level_2');
                    setShowMePermission(true);
                } else {
                    localStorage.setItem('se_permission', '');
                    setShowMePermission(false);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        checkPermission();
    }, [])

    return (
        <>
            {showMePermission ? (isOpen ?
                <InputMessage
                    isOpen={isOpen}
                    inputRef={inputRef}
                    submitMessage={submitMessage}
                    isLoadingRespons={isLoadingRespons}
                    setIsOpen={setIsOpen}
                    setSubmitMessage={setSubmitMessage}
                    setIsLoadingRespons={setIsLoadingRespons}
                />
                :
                <IconChatBot
                    setIsOpen={setIsOpen} />)
                : null
            }
        </>
    );
};

export default App;
