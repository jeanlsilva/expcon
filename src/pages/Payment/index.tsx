import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import { Header } from "../../styles/global";
import { AgreementArea, Label, MainContent, SecondaryArea, SelectPlan, Title } from "./styles";

export default function Payment() {
    return (
        <div className="payment">
            <Header>
                <Menu />
            </Header>
            <MainContent>
                <Title>PAYMENT</Title>
                <SelectPlan>
                    <h2>1. Select your plan</h2>
                    <form>
                        <Label color="var(--light-red)">                            
                            <input type="radio" id="basic" name="select-plan" value="basic" />
                            <span></span>
                            BASIC
                        </Label>
                        <Label color="var(--yellow)">                            
                            <input type="radio" id="advanced" name="select-plan" value="advanced" />
                            <span></span>
                            ADVANCED
                        </Label>
                        <Label color="var(--cyan)">                            
                            <input type="radio" id="pro" name="select-plan" value="pro" />
                            <span></span>
                            PRO
                        </Label>
                    </form>
                </SelectPlan>
                <SecondaryArea>
                    <div>
                        <h2>2. Billing Information</h2>
                        <form className="billing">
                            <label>
                                FULL NAME
                                <input type="text" name="name" />                            
                            </label>
                            <label>
                                BILLING ADDRESS
                                <input type="text" name="address" />                            
                            </label>
                            <div>
                                <label>
                                    CITY
                                    <input type="text" name="city" />                            
                                </label>
                                <label>
                                    POSTAL CODE
                                    <input type="text" name="postal-code" />                            
                                </label>
                            </div>
                            <label>
                                COUNTRY
                                <select>
                                    <option>Select</option>
                                </select>
                            </label>
                        </form>
                    </div>
                    <div>
                        <h2>3. Credit Card Information</h2>
                        <form>
                            <label>
                                CARDHOLDER'S NAME
                                <input type="text" name="cardholder" />
                            </label>                            
                            <label>
                                CARD NUMBER
                                <input type="text" name="card-number" />
                            </label>
                            <div>
                                <label>
                                    EXPITY MONTH
                                    <select>
                                        <option>Select</option>
                                    </select>
                                </label>                            
                                <label>
                                    EXPIRY YEAR
                                    <select>
                                        <option>Select</option>
                                    </select>
                                </label>
                            </div>
                            <label>
                                CVV
                                <input type="text" name="cvv" />
                            </label>
                        </form>
                    </div>
                </SecondaryArea>
                <AgreementArea>
                    <p>
                        By continuing, I acknowledge that I’ve read and 
                        agree to the <span>Terms of Service & Privacy Policy</span>.
                    </p>
                    <button>DOWNLOAD</button>
                </AgreementArea>
            </MainContent>
            <Footer />
        </div>
    );
}