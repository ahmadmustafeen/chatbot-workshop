import { ChatCompletionRequestMessageRoleEnum } from 'openai';

export interface messageType {
  role: ChatCompletionRequestMessageRoleEnum;
  content: string;
}

export interface iAnswer {
  content: string;
}

export interface iQuestion {
  content: string;
}

export interface iSocialLinks {
  label: string;
  children: React.ReactNode;
  link: string;
}
