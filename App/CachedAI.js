import { GoogleGenerativeAI } from "@google/generative-ai";
import {getHeaders, GoogleAICacheManager, GoogleAIFileManager,FilesRequestUrl,RpcTask } from "@google/generative-ai/server";
import { useAssets } from 'expo-asset';

  
  


export async function CachedAI () {
  
    

    async function uploadFile(filepath) {
      // Construct a FileManager to upload a file which can be used
      // in a Cached Context.
      


      const fileManager = new GoogleAIFileManager(process.env.EXPO_PUBLIC_GEMINI_KEY);
      //////mudança de método
      fileManager.uploadFile= async function uploadFile(filePath, fileMetadata) {
    
        console.log(filePath)
        const [assets, error] = useAssets([
          require('./assets/images/cat.jpg')
        ]);
        assets?console.log(assets[0].uri):console.log("Falhou")

        const file = assets[0]
        //const url = new FilesRequestUrl(RpcTask.UPLOAD, this.apiKey, this._requestOptions);
        const uploadHeaders = getHeaders(assets[0].uri);
        const boundary = generateBoundary();
        uploadHeaders.append("X-Goog-Upload-Protocol", "multipart");
        uploadHeaders.append("Content-Type", `multipart/related; boundary=${boundary}`);
        const uploadMetadata = getUploadMetadata(fileMetadata);
        // Multipart formatting code taken from @firebase/storage
        const metadataString = JSON.stringify({ file: uploadMetadata });
        const preBlobPart = "--" +
            boundary +
            "\r\n" +
            "Content-Type: application/json; charset=utf-8\r\n\r\n" +
            metadataString +
            "\r\n--" +
            boundary +
            "\r\n" +
            "Content-Type: " +
            fileMetadata.mimeType +
            "\r\n\r\n";
        const postBlobPart = "\r\n--" + boundary + "--";
        const blob = new Blob([preBlobPart, file, postBlobPart]);
        const response = await makeServerRequest(url, uploadHeaders, blob);
        return response.json();
      }
    


      //////
    
      // Upload a picture of a brown cat.
      console.log("upload_funcion",filepath)
      const fileResult = await fileManager.uploadFile(filepath, {
        mimeType: "image/jpg",
        name: "files/browncat",
        displayName: "brownCat",
      });
    

      return fileResult;
    }
    //   //  const [assets, error] = useAssets([
    //   //    require("./assets/images/cat.jpg")
    //   //  ]);

    // // Get your API key from https://aistudio.google.com/app/apikey
    // // Access your API key as an environment variable.
    // const genAI = new GoogleGenerativeAI(
    //   process.env.EXPO_PUBLIC_GEMINI_KEY
    // );

    // // Construct a GoogleAICacheManager using your API key.
    // const cacheManager = new GoogleAICacheManager(
    //   process.env.EXPO_PUBLIC_GEMINI_KEY
    // );

    // // Create our own text to cache.
    // let text = "";
    // for (let i = 0; i < 6554; i++) {
    //   text += "Purple cats drink chicken soup.";
    //   text += i % 8 === 7 ? "\n" : " ";
    // }

    // // Upload a picture to add to the cache.
    
  console.log("Dentro do Cached")
  const fileResult = await uploadFile('./assets/images/cat.jpg');
     
    // // Create a cache which lasts 20 seconds.
    // const displayName = "Example cat cache";
    // const model = "models/gemini-1.5-flash-001";
    // let ttlSeconds = 20;
    // const createCacheResult = await cacheManager.create({
    //   ttlSeconds,
    //   model,
    //   displayName,
    //   contents: [
    //     {
    //       role: "user",
    //       parts: [
    //         { text },
    //         {
    //           fileData: {
    //             mimeType: fileResult.file.mimeType,
    //             fileUri: fileResult.file.uri,
    //           },
    //         },
    //       ],
    //     },
    //   ],
    // });
    // const cacheServiceName = createCacheResult.name;
    // const expireTime = createCacheResult.expireTime;
    // const totalTokenCount = createCacheResult.usageMetadata.totalTokenCount;
    // // Output should be simliar to:
    // // `created cache:  cachedContents/cgc35ajq07jc expires: 2024-06-17T23:23:08.169689178Z  total tokens:  40403`
    // console.log(
    //   "created cache: ",
    //   cacheServiceName,
    //   " expires: ",
    //   expireTime,
    //   " total tokens: ",
    //   totalTokenCount,
    // );

    // // List the caches.
    // const listResult = await cacheManager.list();

    // // An example search for the created cache.
    // listResult.cachedContents.forEach((cacheElement) => {
    //   // search by display name defined at construction.
    //   if (cacheElement.displayName === displayName) {
    //     // Located cache in the list result via display name.
    //   }
    //   // or, alternatively, by the cache name assigned by the service.
    //   if (cacheElement.name === cacheServiceName) {
    //     // Located cache in the list result via name.
    //   }
    // });

    // // Update the expiration time to 50 seconds from now.
    // const newExpireTime = new Date(new Date().getTime() + 50 * 1000);
    // const updateExpirationParams = {
    //   cachedContent: { expireTime: newExpireTime.toISOString() },
    // };
    // const updateExpirteTimeResult = await cacheManager.update(
    //   cacheServiceName,
    //   updateExpirationParams,
    // );
    // // Output should look similar to: `New expiration time:  2024-06-17T23:23:38.686Z`
    // console.log("New expiration time: ", updateExpirteTimeResult.expireTime);

    // // Or, alternatively, extend the time to live (TTL) by 30 seconds from the
    // // original 20 seconds.
    // ttlSeconds += 30;
    // const updateParams = { cachedContent: { ttlSeconds } };
    // const updateTtlResult = await cacheManager.update(
    //   cacheServiceName,
    //   updateParams,
    // );
    // // Output should look similar to: `New expiration time:  2024-06-17T23:23:38.686Z`
    // console.log("New expiration time: ", updateTtlResult.expireTime);

    // // Query a cache object by the service name. This will return an object
    // // similar to the one that was returned from call to create(), or
    // // the objects in the array returned by list().
    // const queriedCache = await cacheManager.get(cacheServiceName);

    // // Construct a `GenerativeModel` which uses the cache object.
    // const genModel = genAI.getGenerativeModelFromCachedContent(queriedCache);

    // // Run inference on the service.
    // const result = await genModel.generateContent({
    //   contents: [
    //     {
    //       role: "user",
    //       parts: [
    //         { text: "What do purple cats drink, and what is this a picture of?" },
    //       ],
    //     },
    //   ],
    // });

    // // The response should note that purple cats drink chicken soup, and comment on
    // // the picture of the cat as well.
    // console.log("RESULTADO DO GATO",result.response.text());
    // return assets[0]
}
