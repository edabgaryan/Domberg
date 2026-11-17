import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function OrderButton({ projectName = 'Проект дома', customTitle, showFinish = true, telegramTitle }) {

  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    finish: '',
    comment: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (form.name.trim().length < 2) newErrors.name = t('order.errors.name');
    if (!form.phone || form.phone.trim().length < 10) newErrors.phone = t('order.errors.phone');
    if (showFinish && !form.finish) newErrors.finish = t('order.errors.finish');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

const sendToTelegram = async (formData) => {
  const token = '8131952488:AAH-IIRF36HAK5qffuq6RNLmvVwYi8xKkQM'; // новый токен
  const chat_id = '531185935';

  const text = `
📩 ${telegramTitle || t('order.telegramTitle')}

🏠 ${t('order.project')}: ${projectName}
👤 ${t('order.name')}: ${formData.name}
📱 ${t('order.phone')}: ${formData.phone}
🎨 ${t('order.finish')}: ${formData.finish || '—'}
💬 ${t('order.comment')}: ${formData.comment || '—'}
`;

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id, text, parse_mode: 'Markdown' })
    });
    console.log('✅ Заявка отправлена в Telegram');
  } catch (error) {
    console.error('❌ Ошибка Telegram:', error);
  }
};


  const sendToGoogleForm = async (formData) => {
    const data = new FormData();
    data.append('entry.1880084898', formData.name);
    data.append('entry.1441944693', formData.phone);
    data.append('entry.622903486',
      `${t('order.project')}: ${projectName}\n${t('order.finish')}: ${formData.finish}\n${t('order.comment')}: ${formData.comment || '—'}`
    );
    data.append('entry.660202342', t('order.source'));

    try {
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSdcjDUDqffZfFqsrKdw305enRiv6rGT1pwCGzRXr9vxTt8_2Q/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        body: data
      });
    } catch (error) {
      console.error('Google Form error:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    await sendToTelegram(form);
    await sendToGoogleForm(form);

    setIsOpen(false);
    setForm({ name: '', phone: '', finish: '', comment: '' });
    setErrors({});
    setIsSubmitting(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="contact__form-button order__button">
        {t('order.button')}
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-form" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal__title">
              {customTitle || t('order.title')} <strong></strong>
            </h3>
            <form onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t('order.namePlaceholder')}
              />
              {errors.name && <div className="error">{errors.name}</div>}

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder={t('order.phonePlaceholder')}
              />
              {errors.phone && <div className="error">{errors.phone}</div>}

              <input
                type="text"
                value={`${projectName}`}
                readOnly
                className="contact__form-input"
              />
              {showFinish && (
                <>
                  <select name="finish" value={form.finish} onChange={handleChange}>
                    <option value="">{t('order.selectFinish')}</option>
                    <option value="Черновая">{t('order.finishes.black')}</option>
                    <option value="Предчистовая">{t('order.finishes.pre')}</option>
                    <option value="Под ключ">{t('order.finishes.full')}</option>
                  </select>
                  {errors.finish && <div className="error">{errors.finish}</div>}
                </>
              )}

              <textarea
                name="comment"
                value={form.comment}
                onChange={handleChange}
                placeholder={t('order.commentPlaceholder')}
              />

              <button className="contact__form-button" type="submit" disabled={isSubmitting}>
                {isSubmitting ? t('order.sending') : t('order.submit')}
              </button>

              <p className="privacy-notice">
                {t('order.policyNote')}{' '}
                <a href="/PrivacyPolicy" target="_blank" rel="noopener noreferrer">
                  {t('order.policyLink')}
                </a>.
              </p>
            </form>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="success-popup">
          <p>{t('order.success')}</p>
        </div>
      )}
    </>
  );
}
