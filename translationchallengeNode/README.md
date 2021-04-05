# TopCoder practise challenge: Use google's translation API
We had a free choise of language, format. I tried making a webpage, but the given link is not set up to accept requests from any old webpage, so cors kept getting in the way. Rather than use a proxy to get around this, I decided to just write a version in node.

# How to use
You will need both node and npm (or equivalent) to run this.
You can download the folder (or fork the repo), run 
```
npm install
```
to install the dependencies. (There is only [axios](https://axios-http.com/docs/intro/) and [readlineSync](https://www.npmjs.com/package/readline-sync))
Then, to try out the demo version with a set sentence, run:
```
node translationChallenge.js
```
The file will run.
The demo version translates the sentence "How do I get from leetCode to topCoder?" from English into Czech: "Jak se dostanu z leetCode do topCoder?"

To run the version where the user can input a sentence to translate, type:
```
node userInput.js
```
You will be prompted to type in a sentence. And press enter. 

The results seem fairly good (says someone who barely speaks Czech)

# Help understanding the response from Google's API
By console logging the initial response, I found that res.data has the important part we need:
```
{ sentences:
   [ { trans: 'Jak se dostanu z leetCode do topCoder?',
       orig: 'How do I get from leetCode to topCoder?',
       backend: 3,
       model_specification: [Array],
       translation_engine_debug_info: [Array] } ],
  src: 'en',
  confidence: 1,
  spell: {},
  ld_result:
   { srclangs: [ 'en' ],
     srclangs_confidences: [ 1 ],
     extended_srclangs: [ 'en' ] } }
```
So, the translation is found at
```
data.sentences[0].trans
```
According to the Google API docs, we can send more than one sentence for translation in a single request. So that array may contain more than the single translation.
