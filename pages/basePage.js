import fetch from 'isomorphic-unfetch';
const BasePage = ({ info }) =>
  <div>
    Application Status: {info}
  </div>
BasePage.getInitialProps = async ({ req }) => {
  const res = await fetch('http://www.mocky.io/v2/5cac8e703000002a251036e3')
  const json = await res.json()
  return { info: json.info }
}
export default BasePage;