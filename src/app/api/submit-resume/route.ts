import { NextResponse } from 'next/server';
import { Telegram } from '@/lib/telegram';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type');

    if (contentType?.includes('application/json')) {
      // Обработка формы "Контакты"
      const { name, telegram, message } = await request.json();

      const text = `
📨 Новое сообщение с формы "Контакты":
👤 Имя: ${name || 'не указано'}
💬 Telegram: ${telegram || 'не указано'}
📝 Сообщение: ${message || 'не указано'}
      `.trim();

      await Telegram.sendMessage(text);
      return NextResponse.json({ success: true });
    } else {
      // Обработка формы "Резюме"
      const formData = await request.formData();
      const requiredFields = ['name', 'telegram', 'phone', 'position', 'experience'];

      for (const field of requiredFields) {
        if (!formData.get(field)) {
          return NextResponse.json(
            { error: `Поле ${field} обязательно для заполнения` },
            { status: 400 }
          );
        }
      }

      const message = `
🎯 Новое резюме!
👤 Имя: ${formData.get('name')}
📧 Telegram: ${formData.get('telegram')}
📱 Телефон: ${formData.get('phone')}
💼 Должность: ${formData.get('position')}
⏳ Опыт: ${formData.get('experience')}
📝 Сообщение: ${formData.get('message') || 'Не указано'}
      `.trim();

      await Telegram.sendMessage(message);
      return NextResponse.json({ success: true });
    }
  } catch (error: any) {
    console.error('Ошибка отправки:', error);
    return NextResponse.json(
      { error: 'Произошла ошибка. Пожалуйста, попробуйте позже.' },
      { status: 500 }
    );
  }
}
