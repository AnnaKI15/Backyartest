# Інструкції для деплою проекту

## Підготовка проекту

Проект вже налаштований для деплою на Vercel та Cloudflare Pages.

### Файли конфігурації:

- `vercel.json` - конфігурація для Vercel
- `_redirects` - конфігурація для Cloudflare Pages
- `vite.config.js` - оптимізована конфігурація Vite

## Деплой на Vercel

1. Зайдіть на [vercel.com](https://vercel.com)
2. Увійдіть в акаунт або створіть новий
3. Натисніть "New Project"
4. Підключіть ваш GitHub репозиторій
5. Vercel автоматично виявить, що це Vite проект
6. Налаштування:
   - **Framework Preset**: Vite
   - **Build Command**: `npx vite build` (або залиште автоматичне)
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
7. Натисніть "Deploy"

### Якщо виникає помилка з дозволами:

- Спробуйте змінити Build Command на `npx vite build`
- Або видаліть vercel.json і дозвольте Vercel автоматично виявити налаштування

## Деплой на Cloudflare Pages

1. Зайдіть на [dash.cloudflare.com](https://dash.cloudflare.com)
2. Перейдіть в Pages
3. Натисніть "Create a project"
4. Підключіть ваш GitHub репозиторій
5. Налаштування:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (залиште порожнім)
6. Натисніть "Save and Deploy"

## Альтернативний спосіб (через CLI)

### Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Cloudflare Wrangler:

```bash
npm i -g wrangler
wrangler pages deploy dist
```

## Перевірка після деплою

Після успішного деплою перевірте:

1. Чи завантажується головна сторінка
2. Чи працюють навігація та роутинг
3. Чи завантажуються шрифти
4. Чи відображаються зображення

## Можливі проблеми та рішення

### Проблема: Permission denied для Vite

**Помилка**: `sh: line 1: /vercel/path0/node_modules/.bin/vite: Permission denied`
**Рішення**:

- Змініть Build Command на `npx vite build`
- Або видаліть vercel.json і дозвольте Vercel автоматично виявити налаштування
- Переконайтеся, що в package.json є правильні scripts

### Проблема: 404 при переході на підсторінки

**Рішення**: Перевірте, що файл `_redirects` створений правильно для Cloudflare Pages

### Проблема: Не завантажуються шрифти

**Рішення**: Перевірте шляхи до шрифтів у `src/index.css`

### Проблема: Помилки збірки

**Рішення**: Запустіть `npx vite build` локально для перевірки

## Контакти

Якщо виникли проблеми з деплоєм, перевірте:

1. Чи всі залежності встановлені (`npm install`)
2. Чи проект збирається локально (`npm run build`)
3. Чи правильно налаштовані файли конфігурації
