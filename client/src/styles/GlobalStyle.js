import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;700&family=Roboto:wght@300;400;500;700&display=swap');  
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, Roboto, sans-serif;
    font-weight: 300;
    color: ${props => props.theme.colors.n400};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-right: auto;
    margin-left: auto;
    overflow-x: hidden;
    background-color: ${props => props.theme.colors.n100};
  }

  #root {
    width: 100%;
    height: inherit;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }
  
  nav, #root {
    max-width: 3000px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  .border-red {
    border: 2px solid red;
  }

  /* .loading-dots {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loading-dot {
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background: ${props => props.theme.colors.n500};
    display: block;
    float: left;
    transition: transform .6s ease-out;
    transform: translate3d(0, 0, 0);
  }

  .loading-dots .loading-dot:nth-child(2){
    margin: 0 4px;
  }

  .active .loading-dot:nth-child(1){
    -webkit-animation: animateDot .6s ease-out;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-delay: 0s;
    -webkit-animation-iteration-count: infinite;
  }

  .active .loading-dot:nth-child(2){
    -webkit-animation: animateDot .6s ease-out;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-delay: .08s;
    -webkit-animation-iteration-count: infinite;
  }

  .active .loading-dot:nth-child(3){
    -webkit-animation: animateDot .6s ease-out;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-delay: .16s;
    -webkit-animation-iteration-count: infinite;
  } */


  // TOAST STYLES //

  /* .toast.container {
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  z-index: 2;
} */

/* .toast. ul,
.toast li {
  padding: 0;
  margin: 0;
} */

/* .toast ul {
  position: fixed;
  bottom: 0;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: flex-end;
  z-index: 2;
  padding-inline-start: 0px;
  padding: 0px 10px;
  height: 70vh;
} */

/* .toast li {
  padding: 24px;
  width: 532px;
  min-height: 80px;
  border: ${({ theme, error }) =>`2px solid ${error ? theme.colors.redDefault : theme.colors.greenDefault}`};
  background: ${({ theme }) => theme.colors.n0};;
  margin: 10px;
  flex: 0 0 100px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  font-size: ${({ theme }) => theme.fontSizes.md2};
  line-height: 150%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
} */

/* .toast button {
  outline: none;
  -webkit-appearance: none;
  cursor: pointer;
}

.toast button.add {
  position: fixed;
  bottom: 10px;
  left: 10px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 28px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.toast button.close {
  position: absolute;
  top: 15px;
  right: 10px;
  background: white;
  border: none;
}
  
  @-webkit-keyframes animateDot {
    20% {
      transform: scale(1)
    }
    40% {
      transform: scale(1) translate3d(0, 6px, 0);
    }
    100% {
      transform: scale(1)  translate3d(0, 0, 0)
    }
  } */
`; 
