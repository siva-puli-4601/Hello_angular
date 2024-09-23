import { Component, Renderer2 } from '@angular/core';


interface Message {
  text: string;
  sender: 'user' | 'bot';
}

interface ChatSession {
  date: Date;
  messages: Message[];
}

@Component({
  selector: 'app-chat-ui',
  templateUrl: './chat-ui.component.html',
  styleUrls: ['./chat-ui.component.css']
})
export class ChatUiComponent  {

  userInput: string = '';
  previousChats: ChatSession[] = [];
  currentChat: ChatSession = { date: new Date(), messages: [] };
  isDarkTheme:any;

  constructor(private renderer:Renderer2) {
    // Load previous chats from localStorage on component load
    const storedChats = localStorage.getItem('previousChats');
    if (storedChats) {
      this.previousChats = JSON.parse(storedChats);
    }
  }
  

  sendMessage() {
    if (this.userInput.trim()) {
      // Add user message to the current chat
      this.currentChat.messages.push({ text: this.userInput, sender: 'user' });

      // Simulate bot response after a delay
      setTimeout(() => {
        this.currentChat.messages.push({ text: 'This is a bot response!', sender: 'bot' });
      }, 1000);

      // Clear the input
      this.userInput = '';
    }
  }

  // Save the current chat and reset for a new session
  saveChat() {
    if (this.currentChat.messages.length) {
      this.previousChats.push({ ...this.currentChat });
      this.currentChat = { date: new Date(), messages: [] };
  
      // Save to localStorage
      localStorage.setItem('previousChats', JSON.stringify(this.previousChats));
    }
  }

  // Load a previous chat into the chat window
  loadChat(index: number) {
    this.currentChat = this.previousChats[index];
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      this.renderer.addClass(document.body, 'dark-theme');
    } 
    else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }
}