import HeaderContainer from "../Header/HeaderContainer";
import FooterContainer from "../Footer/FooterContainer";
const About = () => {
  return (
    <div>
      <HeaderContainer />
      <div className="h-[80vh] ">
        <section className="border-2 flex flex-col ">
          <h2 className="m-auto">Who are we?</h2>
          <div className="w-[90vw] md:ml-10 flex flex-row items-start justify-between border-2">
            <div className="mt-20 w-1/3 flex items-center justify-center">
              <span className="">
                We are a great organization composed by six colaborators who
                focus on the client safety and the easiness to administrate and
                carry on all your wallet projects. With Wallet all is more easy.
                You make the calls to make a payment or transfer, even add some
                founds to start using this app while devs take care of watch all
                the enviroment for you.
              </span>
            </div>

            <div className="mt-20 w-1/3 flex items-center justify-center">
              <span>
                This project was possible thanks to the members of the
                organization:
                <br />
                -Alejandro senger
                <br />
                -Julian rodriguez
                <br />
                -Luis salcedo
                <br />
                -Alan flores
                <br />
                -Tomas Benitez
                <br />
                -Leonardo Echenique <br />
              </span>
            </div>
          </div>
        </section>
        <div className="w-[40vw] ml-20 mt-6 flex flex-row items-start justify-between border-2">
          <span>
            All the devs posses an unique aproach among excelent expertises.
            Working all as a group was a fun task in wich the only thing that
            was maintened as "the objective" was provide the users the correct
            functionalities and an easy access, among with the safesty provided
            that characterizes us.
          </span>
              </div>
              <div className="border-4 flex justify-center mt-20"> 
              <h1 ><b>Fellowship, patience and vision is what makes us great.</b></h1>
              </div>
              <div className="border-4 h-1/6 flex justify-center mt-20">
                  <p>Without more, here are the links to check some of social media provided of the professionals:</p>
                  <div>
    
                  </div>
              
              </div>
      </div>
      <FooterContainer />
    </div>
  );
};

export default About;
