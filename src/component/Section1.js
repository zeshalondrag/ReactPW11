import React from "react";

class Section1 extends React.Component {
    render() {
        return (
            <section class="section1">
            <div>
                <pre class="text1">Dr Learn World <span class="span1">Programming</span> <br/>Training Center!</pre>
                <pre class="text2">With Dr Learn you can enjoy all the programming <br/>training!</pre>
                <div>
                    <button class="button-tutorials">Go to tutorials</button>
                    <button class="button-version">Pro version</button>
                </div>
            </div>
            <img src="img/drlearn.png" alt="Not Found" class="img-drlearn"/>
        </section>
        )
    }
}

export default Section1;