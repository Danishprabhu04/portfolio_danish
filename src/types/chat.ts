export interface ChatMessage {
  sender: 'oracle' | 'user';
  text: string;
}

export interface QuickQuestion {
  label: string;
  key: string;
}
