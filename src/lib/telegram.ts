export class Telegram {
  private static readonly BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  private static readonly CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  static async sendMessage(text: string): Promise<void> {
    if (!this.BOT_TOKEN || !this.CHAT_ID) {
      throw new Error('Telegram credentials not configured. Please check your .env.local file');
    }
    
    console.log('BOT_TOKEN:', this.BOT_TOKEN);
    console.log('CHAT_ID:', this.CHAT_ID);    

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${this.BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: this.CHAT_ID,
            text: text,
            parse_mode: 'HTML'
          }),
        }
      );      

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Telegram API Error: ${error.description}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
      throw error;
    }
  }

  static async sendDocument(file: File): Promise<void> {
    if (!this.BOT_TOKEN || !this.CHAT_ID) {
      throw new Error('Telegram credentials not configured. Please check your .env.local file');
    }

    try {
      const formData = new FormData();
      formData.append('chat_id', this.CHAT_ID);
      formData.append('document', file, file.name);

      const response = await fetch(
        `https://api.telegram.org/bot${this.BOT_TOKEN}/sendDocument`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Telegram API Error: ${error.description}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error sending document to Telegram:', error);
      throw error;
    }
  }
}
