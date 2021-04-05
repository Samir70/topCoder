# Tranlsation app, using google API
I wrote a quick interface in Vue, and used fetch to make the request. Instead of linking to the cdn, I downnloaded the files and included them in the resources. Currently, the link is to the Vue.dev file. If you want to change to the Vue.min file, just uncomment one and comment out the other.

Using the program is simple. Either download the files and open the html file, or use this link for the version on my github. (Feel free to fork the repo, but bear in mind the API link is limited to the number of requests made per day, so it isn't practicle for real life use).

## the google translation API
The settings for the google API were provided in code documents for the challenge:

```
curl --location --request POST 'https://translate.google.com/translate_a/single?client=at&dt=t&dt=ld&dt=qca&dt=rm&dt=bd&dj=1&hl=%25s&ie=UTF-8&oe=UTF-8&inputm=2&otf=2&iid=1dd3b944-fa62-4b55-b330-74909a99969e&' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'User-Agent: AndroidTranslate/5.3.0.RC02.130475354-53000263 5.1 phone TRANSLATE_OPM5_TEST_1' \
--data-urlencode 'sl=de' \
--data-urlencode 'tl=en' \
--data-urlencode 'q=Hallo'
```

I tried to use Axios to make the request. They explain how to configure the request [here](https://axios-http.com/docs/req_config/). But I couldn't get past cors. So I switched to using fetch. That got me a response, where I could see the translation in the network part of developer tools.

```
{
	"sentences": [
		{
			"trans": "Jak se dostanu z leetCode do topCoder?",
			"orig": "How do I get from leetCode to topCoder?",
			...
		}
	],
  ...
}
```
But still no way past cors, without using a proxy.
