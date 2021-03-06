import { getCssText } from "../styles";

const FontsConfig = () => {
  return (
    <>
      <style
        id="stitches"
        dangerouslySetInnerHTML={{ __html: getCssText() }}
      />
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet"
      />
    </>
  )
}

export default FontsConfig;
