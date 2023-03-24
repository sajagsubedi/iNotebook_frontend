import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2&family=Baloo+Thambi+2&family=Open+Sans:ital@1&family=Poppins:ital,wght@1,300;1,400&display=swap");

:root {
  --main-bg-color: #000;
  --white-shade: #fff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;
}

header {
  width: 100%;
  overflow: hidden;
  height:60px;
  font-family: "Baloo Bhaina 2", cursive;
}
.navigation {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 60px;
  display: flex;
  position: fixed;
  justify-content: space-between;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.themecolor};
  box-shadow: 0 25px 10px ${({ theme }) => theme.colors.blackShade};
  padding-bottom:10px; 
   transition: height 0.5s, width 0.5s;
  transition-delay: 0s, 0.75s;
 
}

.navigation.active {
  width: 100%;
  height: 180px;
}
.phoneVisible {
  width: 20%;
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
}
.navigation .appnameBx .appname {
  white-space: nowrap;
  color: white;
  font-size: 1.4em;
  font-weight: bold;
}

nav {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: right;
  position: sticky;  

}

.nav-links {
  width: 80%; 
}
.menu {
  justify-content: space-between;
  align-items: center;
  display: flex;
  height: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.4);
}
.firstMenuHalf{
display:flex;
justify-content:flex-start;
}
.menu li {
  list-style: none;
  align-items: center;
  justify-content: center;
  margin: 20px;
}

.menu li a {
  text-decoration: none;
  font-size: 1em;
  padding: 5px;
  color: gray;
}
.active {
  color: var(--white-shade) !important;
}
.menu li a:hover {
  color: ${({ theme }) => theme.colors.secondaryTheme};
}

.navigation .menuToggle {
  width: 50px;
  height: 50px;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.navigation .menuToggle::before {
  content: "";
  position: absolute;
  width: 32px;
  height: 2px;
  background: var(--white-shade);
  transform: translateY(-10px);
  box-shadow: 0 10px var(--white-shade);
  transition: 0.5s;
}

.navigation.active .menuToggle::before {
  content: "";
  transform: translateY(0px) rotate(45deg);
  box-shadow: 0 0 ${({ theme }) => theme.colors.secondaryTheme};
  background: ${({ theme }) => theme.colors.secondaryTheme};
}

.navigation .menuToggle::after {
  content: "";
  position: absolute;
  width: 32px;
  height: 2px;
  background: var(--white-shade);
  transform: translateY(10px);
  transition: 0.5s;
}

.navigation.active .menuToggle::after {
  transform: translateY(0px) rotate(-45deg);
  box-shadow: 0 0 ${({ theme }) => theme.colors.secondaryTheme};
  background:${({ theme }) => theme.colors.secondaryTheme};
}
.mainText{
font-size:2rem;
display:flex;
margin:10px 0px 20px;
justify-content:center;
text-align: center;
}
.sm{
font-size:1.5rem;
margin:5px;
}
.secondHalf{
display:flex;
align-items:center;
}
.PrimaryButton {
padding: 7px !important;
background: ${({ theme }) => theme.colors.secondaryTheme};
color: white !important;
border: none;
border-radius: 5px;
font-weight: bold;
}
.PrimaryButton:disabled{
  opacity:.7;
}
.PrimaryInput{
    background-color: #f3f4f6;
    line-height: 2rem;
    border: 1px solid #d1d5db;
    color: black;
    padding:3px;
    font-size: 1rem;
    border-radius: 5px;
    outline: none;
    margin: 5px;
}
.PrimaryInput:focus{
    background-color: #ffffff;
    border-color: ${({ theme }) => theme.colors.secondaryTheme};
    box-shadow: 3px 3px 3px ${({ theme }) => theme.colors.bordershade},
      -3px -3px 3px ${({ theme }) => theme.colors.bordershade};
  
}
.globalForm {
    display: flex;
    gap: 5px;
    justify-content: center;
    flex-direction: column;
  }
  .inputDiv{
  display:flex;
  flex-direction:column;
  }
  
  .formBelowBox{
    text-align:right;
  }
  .formBelowBox a{
  color:${({ theme }) => theme.colors.sptxt};
  }
  .About{
  width:80vw;
  margin:20px auto;
    background:${({ theme }) => theme.colors.focus};
    border-radius:10px;
    padding:12px;
    box-shadow: 10px 10px 10px ${({ theme }) => theme.colors.blackShade};
  }
  .About p{
  text-align:justify;
  margin:5px;
  }
@media (max-width: ${({ theme }) => theme.resposiveBreakPoints.mobile}) {
  .navigation {
    flex-direction: column;
    justify-content: start;
  }
  .phoneVisible {
    width: 100%;
  }
  .nav-links {
    width: 80%;
    margin-left: 20px;
  }
  .menu .firstMenuHalf,
  .menu {
  align-items:flex-start;
    flex-direction: column;
  }
  .menu li {
    margin: 8px;
  }
  .menu li a {
    padding: 0px;
  }
  .navigation .menuToggle {
    display: block;
    margin: 40px 0 0 0;
  }
}

`;
