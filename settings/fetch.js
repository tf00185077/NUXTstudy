export default class myFetchClass {
  get = async (url, header) => {
    try {
      let response = await fetch(url, {
        method: "GET",
        headers: header,
      });
      if (!response.ok) {
        throw new Error("请求失败");
      }
      response = await response.json();
      return response.content;
    } catch (error) {
      console.error("捕获到错误：", error.message);
    }
  };
  post = async (url, header, body) => {
    try {
      let res = await fetch(url, {
        method: "POST",
        headers: header,
        body: body,
      });
      if (!res.ok) {
        throw new Error("请求失败");
      }
      res = await res.json();
      return res.content;
    } catch (error) {
      console.error("捕获到错误：", error.message);
    }
  };
}
