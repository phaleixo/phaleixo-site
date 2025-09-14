# Configuração de Contato

## Como configurar o número do WhatsApp de forma segura

### 1. Configuração inicial (primeira vez)

Se você ainda não tem o arquivo de configuração:

```bash
# Copie o template para criar sua configuração
cp src/config/contact.template.ts src/config/contact.ts
```

### 2. Localizar o arquivo de configuração

```
src/config/contact.ts
```

### 3. Alterar o número do WhatsApp

```typescript
export const CONTACT_CONFIG = {
  whatsapp: {
    number: "5511999999999", // ← Altere aqui o seu número
    // ...
  },
};
```

### 4. Formato do número

- **Formato:** Código do país + Código da área + Número
- **Exemplo Brasil:** Para +55 11 99999-9999, use: `5511999999999`
- **Exemplo EUA:** Para +1 555 123-4567, use: `15551234567`
- **Sem espaços, hífens ou símbolos**

### 5. Personalizar mensagens

Você também pode personalizar as mensagens padrão:

```typescript
messages: {
  general: 'Sua mensagem personalizada aqui',
  landingPage: 'Mensagem específica para landing pages'
}
```

### 6. Alterar email (opcional)

```typescript
email: {
  address: "seuemail@dominio.com";
}
```

## Segurança

✅ **Proteção implementada:**

- ✅ Arquivo `contact.ts` adicionado ao `.gitignore`
- ✅ Template disponível para novos desenvolvedores
- ✅ Informações sensíveis não serão commitadas
- ✅ Centralizado em um arquivo
- ✅ Fácil de alterar
- ✅ Consistente em todo o site

### Arquivos de segurança:

- `src/config/contact.template.ts` - Template público (pode ser commitado)
- `src/config/contact.ts` - Configuração real (protegida pelo .gitignore)

⚠️ **Importante:**

- O arquivo `contact.ts` com suas informações reais **NÃO será enviado** para o repositório
- Use o template (`contact.template.ts`) como base para criar sua configuração
- Mantenha suas informações de contato seguras
