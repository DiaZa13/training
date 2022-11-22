import React from "react"
import {getCsrfToken} from "next-auth/react"




export default function SignIn({csrfToken}) {
    return (
        <section class="vh-100">
            < div class="container py-5 h-100">
                < div class="row d-flex align-items-center justify-content-center h-100">
                    < div class="col-md-8 col-lg-7 col-xl-6">
                        < img src="https://studygoal.jisc.ac.uk/undraw/reading.svg"
                              className="img-fluid" alt="Phone image"/>
                    < /div>
                    <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <div class="d-flex align-items-center mb-3 pb-1">
                            <svg className="svg-icon" viewBox="0 0 20 20">
                                <path fill="none"
                                      d="M18.21,16.157v-8.21c0-0.756-0.613-1.368-1.368-1.368h-1.368v1.368v1.368v6.841l-1.368,3.421h5.473L18.21,16.157z"></path>
                                <path fill="none"
                                      d="M4.527,9.316V7.948V6.579H3.159c-0.756,0-1.368,0.613-1.368,1.368v8.21l-1.368,3.421h5.473l-1.368-3.421V9.316z"></path>
                                <path fill="none"
                                      d="M14.766,5.895h0.023V5.21c0-2.644-2.145-4.788-4.789-4.788S5.211,2.566,5.211,5.21v0.685h0.023H14.766zM12.737,3.843c0.378,0,0.684,0.307,0.684,0.684s-0.306,0.684-0.684,0.684c-0.378,0-0.684-0.307-0.684-0.684S12.358,3.843,12.737,3.843z M10,1.448c0.755,0,1.368,0.613,1.368,1.368S10.755,4.185,10,4.185c-0.756,0-1.368-0.613-1.368-1.368S9.244,1.448,10,1.448z"></path>
                                <path fill="none"
                                      d="M14.789,6.579H5.211v9.578l1.368,1.368h6.841l1.368-1.368V6.579z M12.052,12.052H7.948c-0.378,0-0.684-0.306-0.684-0.684c0-0.378,0.306-0.684,0.684-0.684h4.105c0.378,0,0.684,0.306,0.684,0.684C12.737,11.746,12.431,12.052,12.052,12.052z M12.052,9.316H7.948c-0.378,0-0.684-0.307-0.684-0.684s0.306-0.684,0.684-0.684h4.105c0.378,0,0.684,0.307,0.684,0.684S12.431,9.316,12.052,9.316z"></path>
                            </svg>
                            <span class="h1 fw-bold mb-0">PRO-NET</span>
                        </div>

                        <h5 class="fw-normal mb-3 pb-3">Sign into your account</h5>

                        <form method="post" action="/api/auth/callback/credentials">
                            <input name="csrfToken" type="hidden" defaultValue={csrfToken}/>

                            <div class="form-floating mb-3">
                                <input name="username" type="text" className="form-control" id="floatingInput" placeholder="cn"/>
                                <label htmlFor="floatingInput">Common name</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                    <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div class="d-grid gap-2">
                                <button type="submit" className="btn btn-dark btn-lg">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export async function getServerSideProps(context) {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        },
    }
}