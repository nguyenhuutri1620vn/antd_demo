import React, { FC, PropsWithChildren } from 'react';
import { Affix, Button } from 'antd';
import { MessageTwoTone } from '@ant-design/icons';

export interface IIconProps {
  setIsOpen: (value: boolean) => void;
}

const IconChatbot: FC<PropsWithChildren<IIconProps>> = ({ setIsOpen }: any) => {
  return (
    <div className="scrollable-container" >
      <div className="background">
        <Affix className='affix-chatbot-icon'>
          <Button className='btn-icon-chatbot' onClick={() => setIsOpen(true)}>
            <MessageTwoTone style={{ fontSize: 50 }} twoToneColor="#1890FF" color='#FFF' />
          </Button>
        </Affix>
      </div>
    </div>
  );
}

export default IconChatbot;