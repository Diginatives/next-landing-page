const { EMAIL, PASSWORD } = require("./credentials");
const Mailgen = require("mailgen");
const nodemailer = require("nodemailer");
module.exports.reminderFunction = async (user) => {
  try {
    const { email, name, company, phone, project } = user;

    let config = {
      service: "gmail",
      auth: {
        user: EMAIL,
        pass: PASSWORD,
      },
    };
    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "Hello Sales Team (Website Name: Php Laravel Developer)",
        link: "https://phpdevelopers.netlify.app/phplandingpage",
        copyright: "Copyright © 2023 Php Developer. All rights reserved.",
      },
    });

    let response = {
      body: {
        table: {
          data: [
            {
              name: name,
              phone: phone,
              email: email,
              company: company,
              project: project,
            },
          ],
          columns: {
            // Optionally, customize the column widths
            customWidth: {
              item: "20%",
              price: "15%",
            },
            // Optionally, change column text alignment
            customAlignment: {
              price: "right",
            },
          },
        },
      },
    };

    let mail = MailGenerator.generate(response);
    let message = {
      from: email,
      to: "info@diginatives.io",
      // to: "tayyab7chohan@gmail.com",
      subject: `PhpDevelopers: ${name}`,
      html: mail,
    };
    transporter
      .sendMail(message)
      .then(() => {
        return {
          msg: "Thanks for contactin us Our legel team will contact to you Soon",
        };
      })

      .catch((error) => {
        return { error };
      });
  } catch (err) {
    return { msg: err.message };
  }
};
