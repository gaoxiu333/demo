import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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', // defaults to process.env["OPENAI_API_KEY"]
});

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
  });
  console.log('chatCompletion', chatCompletion);
}

main();