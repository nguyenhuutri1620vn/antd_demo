import API from './utils/api';

export async function sendMessage(payload: any): Promise<unknown> {
    let url = '/lex/interact';
    return API.post(url, payload).then((result) => result.data);
}


