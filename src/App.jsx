import { useState } from "react";
import Input from "./components/Input";
import Text from "./components/Text";
import Opener from "./components/Opener";

function App() {
  const [searchValue, setsearchValue] = useState("");
  const [word, setWord] = useState("");
  const text =
    " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته  حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.";

  function handleSearch() {
    if (searchValue === "") return [];
    const regex = new RegExp(
      `([\\u0600-\\u06FF]*${searchValue}[\\u0600-\\u06FF]*)`,
      "gi"
    );
    const matches = text.match(regex);
    const uniqueMatch = [...new Set(matches)];
    return uniqueMatch || [];
  }

  function handleHighlight() {
    if (word === "") return [];
    const regex = new RegExp(
      `([\\u0600-\\u06FF]*${word}[\\u0600-\\u06FF]*)`,
      "gi"
    );
    const matches = text.match(regex);
    return matches || [];
  }

  return (
    <main className="flex flex-col justify-between items-center mx-auto mt-8 w-fitt h-140 font-vazir">
      <div className="space-y-2">
        <Input
          searchValue={searchValue}
          setWord={setWord}
          setsearchValue={setsearchValue}
        />
        <Opener
          searchValue={searchValue}
          handleSearch={handleSearch}
          setWord={setWord}
          setsearchValue={setsearchValue}
        />
      </div>

      <Text text={text} words={handleHighlight()} />
    </main>
  );
}

export default App;
