import './assets/css/font-awesome.min.css';
import './assets/css/style.css';

function Login() {
    return (
        <>
            <div>
        <meta charSet="UTF-8" />
        <title>login</title>
        <style dangerouslySetInnerHTML={{__html: "\n        body{\n            margin: 0;\n            padding: 0;\n        }\n        body:before{\n            content: '';\n            position: fixed;\n            width: 100vw;\n            height: 100vh;\n            background-image: url(\"bg.jpg\");\n            background-position: center center;\n            background-repeat: no-repeat;\n            background-attachment: fixed;\n            background-size: cover;\n            -webkit-filter: blur(10px);\n            -moz-filter: blur(10px);\n            -o-filter: blur(10px);\n            -ms-filter: blur(10px);\n            filter: blur(10px);\n        }\n        .contact-form\n        {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%,-50%);\n            width: 400px;\n            height: 500px;\n            padding: 80px 40px;\n            box-sizing: border-box;\n            background: rgba(0,0,0,.5);\n            border-radius: 6%;\n        }\n        .avatar {\n            position: absolute;\n            width: 80px;\n            height: 80px;\n            border-radius: 50%;\n            overflow: hidden;\n            top: calc(-80px/2);\n            left: calc(50% - 40px);\n        }\n        .contact-form h2 {\n            margin: 0;\n            padding: 0 0 20px;\n            color: #fff;\n            text-align: center;\n            text-transform: uppercase;\n        }\n        .contact-form p\n        {\n            margin: 0;\n            padding: 0;\n            font-weight: bold;\n            color: #fff;\n        }\n        .contact-form input\n        {\n            width: 100%;\n            margin-bottom: 20px;\n        }\n        .contact-form input[type=\"text\"],\n        .contact-form input[type=\"password\"]\n        {\n            border: none;\n            border-bottom: 1px solid #fff;\n            background: transparent;\n            outline: none;\n            height: 40px;\n            color: #fff;\n            font-size: 16px;\n        }\n        .contact-form input[type=\"submit\"] {\n            height: 30px;\n            color: #fff;\n            font-size: 15px;\n            background: red;\n            cursor: pointer;\n            border-radius: 25px;\n            border: none;\n            outline: none;\n            margin-top: 15%;\n        }\n        .contact-form a\n        {\n            color: #fff;\n            font-size: 14px;\n            font-weight: bold;\n            text-decoration: none;\n        }\n        input[type=\"checkbox\"] {\n            width: 5%;\n        }\n    " }} />
        <div className="contact-form" style={{backgroundColor : 'ligh'}}>
          {/* <img src="icon.png" className="avatar" /> */}
          <h2>login</h2>
          <form>
            <p>User</p>
            <input type="text" name placeholder="User Name" />
            <p>Password</p>
            <input type="password" name placeholder="Enter Password" />&nbsp;&nbsp;
            <p><input type="checkbox" /> Remember Me</p>
            <input type="submit" name defaultValue="login" />
          </form>
        </div>
      </div>
    
            {/* <section classNameName="form-01-main"> */}
                {/* <div  style={{backgroundColor : 'black'}}>
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-sub-main">
                                    <div className="_main_head_as">
                                     
                                    </div>
                                    <div className="form-group">
                                    
                                        <input id="email" name="email" className="form-control _ge_de_ol" type="email" placeholder="Enter Email"  />
                                    </div>

                                    <div className="form-group">
                                        <input id="password" type="password" className="form-control" name="password" placeholder="********" required="required" />
                                        <i toggle="#password" className="fa fa-fw fa-eye toggle-password field-icon"></i>
                                    </div>

                                    <div className="form-group">
                                        <div className="check_box_main">
                                            <a href="#" className="pas-text">Forgot Password</a>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="btn_uy">
                                            <button>Login</button>
                                            {/* <a href="#"><span>Login</span></a> */}
                                        {/* </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                {/* // </div> */}
            {/* </section> */}
        </>);
}

export default Login;
