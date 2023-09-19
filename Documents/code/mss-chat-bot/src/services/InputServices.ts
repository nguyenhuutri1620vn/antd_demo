import * as ChatServices from '../app/services';

export default function getService({
    valueMessage,
    isLoadingRespons,
    setIsOpen,
    setSubmitMessage,
    setValueMessage,
    setIsLoadingRespons,
}: any) {

    const APISendMessage = async () => {
        try {
            const userMessage = valueMessage;
            setSubmitMessage((prev: any) => [...prev, { text: userMessage, sender: 'user' }]);
            setValueMessage('');
            setIsLoadingRespons(true);
            let resp: any = await ChatServices.sendMessage({ Message: userMessage })
            const botResponse = resp.Message;
            setSubmitMessage((prev: any) => [...prev, { text: botResponse, sender: 'bot', type: resp.Type, content: resp?.Content?.Datas }]);
            setIsLoadingRespons(false);
        } catch (error) {
            setSubmitMessage((prev: any) => [...prev, { text: 'Something went wrong !!!', sender: 'bot', type: '', content: '' }]);
            setIsLoadingRespons(false);
        }
    }

    const sendMessage = (e: any, type: string) => {
        if (type === 'mouse') {
            e?.preventDefault();
            if (valueMessage.trim() !== '') {
                APISendMessage();
            } else {
                setValueMessage('');
            }
        } else if (type === 'key') {
            if (e?.key === 'Enter' && !isLoadingRespons) {
                if (valueMessage.trim() !== '') {
                    APISendMessage();
                } else {
                    setValueMessage('');
                }
            }
        }
    }

    const handleInput = (e: any) => {
        if (e?.target.value.length <= 500) {
            setValueMessage(e?.target.value);
        }
    }
    return {
        sendMessage,
        handleInput
    }
}