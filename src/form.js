import React from "react";
import { useState } from "react";
import { withNamespaces } from "react-i18next";

const Form = ({ t, history }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [topic, setTopic] = useState([]);
    const [description, setDescription] = useState("");
    const [version, setVersion] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState(null);

    // define inside function to allow for dynamic localization
    const selectTopic = [
        { key: 0, value: "", name: t("Please select a topic") },
        { key: 1, value: "General", name: t("General request") },
        { key: 2, value: "Software", name: t("Software error") },
        { key: 3, value: "Callback", name: t("Callback") },
    ];

    // verify correct version format
    // if format correct, accept input
    // otherise, display error
    const tryVersion = (versionString) => {
        const versionRegExp = new RegExp(
            /(^\d*$)|(^\d+\.$)|(^\d+\.\d+$)|(^\d+\.\d+\.$)|(^\d+\.\d+\.\d+$)/
        );
        if (versionString.match(versionRegExp)) {
            setError(null);
            setVersion(versionString);
        } else {
            setError(t("valid version format"));
        }
    };

    // verify correct phone number format
    const tryNumber = (numberString) => {
        const numberRegExp = new RegExp(/^\+*[\d -]*$/);
        if (numberString.match(numberRegExp) && numberString.length < 22) {
            setPhone(numberString);
            setError(null);
        } else {
            setError(t("valid phone format"));
        }
    };

    const submitForm = (e) => {
        const location = {
            pathname: "/submitted-issue",
            state: { name, email, topic, description, version, phone },
        };
        history.push(location);
    };

    return (
        <>
            {error ? <div className="error">{error}</div> : null}

            <form onSubmit={submitForm} className="form">
                <h1>{t("Support Form")}</h1>
                <h3>{t("Report an Issue")}</h3>
                <h3 className="dec-sub">{t("get back at you")}</h3>
                <input
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    type="text"
                    placeholder={t("Name")}
                    value={name}
                    autoComplete="off"
                    required
                ></input>

                <input
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    placeholder={t("Email")}
                    value={email}
                    autoComplete="off"
                    required
                ></input>

                <select
                    onChange={(e) => setTopic(e.target.value)}
                    id="topic"
                    name="topic"
                    className="select"
                    required
                >
                    {selectTopic.map((item) => (
                        <option key={item.key} value={item.value} type="text">
                            {item.name}
                        </option>
                    ))}
                </select>

                {topic === "Software" && (
                    <input
                        onChange={(e) => tryVersion(e.target.value)}
                        name="version"
                        type="text"
                        placeholder={t("Version Number")}
                        autoComplete="off"
                        value={version}
                        required
                    ></input>
                )}

                {topic === "Callback" && (
                    <input
                        onChange={(e) => tryNumber(e.target.value)}
                        name="phone"
                        type="tel"
                        placeholder={t("Please insert your phone number")}
                        autoComplete="off"
                        value={phone}
                        required
                    ></input>
                )}

                <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    name="description"
                    type="description"
                    placeholder={t("Description")}
                    value={description}
                    autoComplete="off"
                    required
                ></textarea>
                <button type="submit" className="btn">
                    {t("Submit")}
                </button>
            </form>
        </>
    );
};

export default withNamespaces()(Form);
