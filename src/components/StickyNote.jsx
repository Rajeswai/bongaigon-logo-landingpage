import React from "react";
import { Sparkles, User, Phone, Mail, MapPin, Send } from "lucide-react";
import { supabase, getUTMData } from "../supabase";
import "../App.css";

class StickyNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      loading: false,
      success: false,
      formData: {
        name: "",
        phone: "",
        email: "",
        interestedIn: "3 BHK",
        pincode: "",
      },
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const footer = document.querySelector(".footer-premium");
    const footerTop = footer
      ? footer.getBoundingClientRect().top
      : window.innerHeight;

    const shouldShow =
      window.scrollY > 450 && footerTop > window.innerHeight - 80;

    this.setState({ show: shouldShow });
  };

  handleChange = (e) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async () => {
    const { formData } = this.state;

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !/^\d{6}$/.test(formData.pincode)
    ) {
      alert("Please fill all details and enter a valid 6-digit pincode.");
      return;
    }

    this.setState({ loading: true });

    const { error } = await supabase.from("subhamgroup_park-bongaigaon").insert([
      {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        interested_in: formData.interestedIn,
        requirement: "Site Visit",
        timing: formData.pincode ? `Pincode: ${formData.pincode}` : null,

        ...getUTMData(),
      },
    ]);

    if (error) {
      console.log("SUPABASE ERROR:", error);
      alert(error.message);
      this.setState({ loading: false });
      return;
    }

    await fetch(
      "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZlMDYzZjA0MzI1MjZiNTUzMTUxMzQi_pc",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          interested_in: formData.interestedIn,
          requirement: "Site Visit",
          timing: formData.pincode ? `Pincode: ${formData.pincode}` : null,
          pincode: formData.pincode || null,

          ...getUTMData(),
        }),
      }
    );

    this.setState({
      loading: false,
      success: true,
      formData: {
        name: "",
        phone: "",
        email: "",
        interestedIn: "3 BHK",
        pincode: "",
      },
    });

    setTimeout(() => {
      window.location.href = "/park-bongaigaon/thank-you";
    }, 2200);
  };

  render() {
    return (
      <>
        <div className={`desktop-sticky-form ${this.state.show ? "show" : ""}`}>
          {this.state.success ? (
            <div className="sticky-success-box">
              <div className="form-success-check">✓</div>
              <span>Submitted</span>
            </div>
          ) : (
            <>
              <div className="sticky-left">
                <div className="sticky-icon">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h4>Site Visit</h4>
                  <p>Book Priority Slot</p>
                </div>
              </div>

              <div className="sticky-input">
                <User size={14} />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={this.state.formData.name}
                  onChange={this.handleChange}
                />
              </div>

              <div className="sticky-input">
                <Phone size={14} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={this.state.formData.phone}
                  onChange={this.handleChange}
                />
              </div>

              <div className="sticky-input">
                <Mail size={14} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.formData.email}
                  onChange={this.handleChange}
                />
              </div>

              <select
                className="sticky-select"
                name="interestedIn"
                value={this.state.formData.interestedIn}
                onChange={this.handleChange}
              >
                <option value="3 BHK">3 BHK — ₹63.54L</option>
                <option value="4 BHK">4 BHK — ₹86.34L</option>
              </select>

              <div className="sticky-input sticky-pincode">
                <MapPin size={14} />
                <input
                  type="text"
                  name="pincode"
                  inputMode="numeric"
                  pattern="[0-9]{6}"
                  maxLength={6}
                  placeholder="Pincode"
                  value={this.state.formData.pincode}
                  onChange={this.handleChange}
                />
              </div>

              <button
                className="sticky-submit"
                onClick={this.handleSubmit}
                disabled={this.state.loading}
              >
                {this.state.loading ? "Saving..." : "Confirm"}{" "}
                <Send size={15} />
              </button>
            </>
          )}
        </div>

        <button
          className={`mobile-sticky-btn ${this.state.show ? "show" : ""}`}
          onClick={this.props.onOpenPopup}
        >
          Enquire Now
        </button>
      </>
    );
  }
}

export default StickyNote;
