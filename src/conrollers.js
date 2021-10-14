const UrlModel = require("./model");
const shortId = require("shortid");
const validUrl = require("valid-url");
const URL = process.env.PROD_URL || process.env.DEV_URL;

const createUrl = async (req, res) => {
  //   res.send("hello from create url");
  const url = req.body.url;
  const isValid = validUrl.isUri(url);
  if (!isValid) {
    return res.status(400).json({
      message: "Invalid Url",
    });
  }
  const isExist = await UrlModel.findOne({ long_url: url });
  console.log(isExist);
  if (isExist) {
    return res.status(200).json({
      message: "Available",
      short_url: isExist.short_url,
    });
  }
  //   const shortCode = shortId.generate();
  //   const shortUrl = URL + "/" + shortCode;
  //   console.log(shortUrl);
  //   const newUrl = new UrlModel({
  //     long_url: url,
  //     short_url: shortUrl,
  //     url_code: shortCode,
  //   });
  //   await newUrl.save();
  //   return res.json({ short_url: shortUrl });
};
const redirect = async (req, res) => {
  const code = req.params.code;
  const destination = await UrlModel.findOne({ url_code: code });
  if (!destination) {
    return res.status(400).json({
      message: "Invalid Url",
    });
  }
  const longUrl = destination.long_url;
  res.redirect(longUrl);
};

module.exports = { createUrl, redirect };
