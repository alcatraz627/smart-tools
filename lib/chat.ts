// import { PuppeteerWebBaseLoader } from "@langchain/community/document_loaders/web/puppeteer";
// import { ChatPromptTemplate } from "@langchain/core/prompts";
import { HumanMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";
// import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
// import { createRetrievalChain } from "langchain/chains/retrieval";
// import { MemoryVectorStore } from "langchain/vectorstores/memory";
// // import { CSVLoader } from "langchain/document_loaders/fs/csv";
// import { CSVLoader } from "@langchain/community/document_loaders/fs/csv";
// import { TextLoader } from "langchain/document_loaders/fs/text";
// import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
// import { readFile } from "node:fs/promises";
// import path from "node:path";

const model = new ChatOpenAI({ temperature: 0.9, model: "gpt-3.5-turbo" });

export const getAnswer = async (question: string) => {
  return (await model.invoke([new HumanMessage({ content: question })]))
    .content as string;
};

// export const loadTextFromFile = async (filePath = "./example.txt") => {
//   const loader = new TextLoader(filePath);
//   const docs = await loader.load();

//   return docs;
// };

// export const loadTextFromCsvFile = async (
//   filePath = "./World Important Dates.csv"
// ) => {
//   const loader = new CSVLoader(filePath);
//   const docs = await loader.load();

//   return docs;
// };

// export const loadTextFromUrl = async (
//   url = "https://www.mohammadfaisal.dev/about-me"
// ) => {
//   const loader = new PuppeteerWebBaseLoader(url);
//   const docs = await loader.load();

//   return docs;
// };

// export const getSplitDocuments = async (text: string) => {
//   const textSplitter = new RecursiveCharacterTextSplitter({
//     chunkSize: 1000,
//   });

//   const output = await textSplitter.createDocuments([text]);

//   return output;
// };

// const SaveDirName = "vectorstoredata";

// export const generateVectorStore = async () => {
//   const trainingText = (await readFile("./data/wid.csv")).toString();

//   const docs = await getSplitDocuments(trainingText);
//   //   const docs = await loadTextFromCsvFile();

//   const vectorStore = await MemoryVectorStore.fromDocuments(
//     docs,
//     new OpenAIEmbeddings()
//   );

//   console.log(vectorStore);

//   return vectorStore;

//   // return await vectorStore.save(SaveDirName);
// };

// // const vectorStore = await generateVectorStore();

// console.log("AAA:", path.resolve("."));
// generateVectorStore();

// export const getAnswer = async (question: string) => {
//   const vectorStore = await generateVectorStore();

//   const prompt = ChatPromptTemplate.fromTemplate(
//     `Answer the user's question: {input}`
//   );

//   const combineDocsChain = await createStuffDocumentsChain({
//     llm: model,
//     prompt,
//   });

//   const retriever = vectorStore.asRetriever();

//   const chain = await createRetrievalChain({
//     combineDocsChain,
//     retriever,
//   });

//   const result = await chain.invoke({ input: question });

//   return result.answer;
// };
