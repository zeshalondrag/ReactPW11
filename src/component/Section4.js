import React from "react";

class Section4 extends React.Component {
    render() {
        return (
            <section class="section4">
            <div>
                <div class="block2">
                    <img src="img/20.png" alt="Not Found" class="img-20"/>
                    <img src="img/react.png" alt="Not Found" class="img-react"/>
                    <pre class="text4">React js <span class="span2"><br/>35.10$</span></pre>
                    <button  class="button-buy">Buy</button>
                </div>
                <div class="block3">
                    <img src="img/10.png" alt="Not Found" class="img-10"/>
                    <img src="img/js.png" alt="Not Found" class="img-javascript"/>
                    <pre class="text4">Java script <span class="span2"><br/>20.02$</span></pre>
                    <button class="button-buy">Buy</button>
                </div>
                <div class="block4">
                    <img src="img/40.png" alt="Not Found" class="img-40"/>
                    <img src="img/tailwindcss.png" alt="Not Found" class="img-tailwindcss"/>
                    <pre class="text4">Tailwind css<span class="span2"><br/>56$</span></pre>
                    <button class="button-buy">Buy</button>
                </div>
            </div>
        </section>
        )
    }
}

export default Section4;