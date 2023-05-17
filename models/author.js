const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

AuthorSchema.virtual("name").get(function () {
  if (this.first_name && this.family_name) {
    return `${this.family_name}, ${this.first_name}`;
  } else {
    return "";
  }
});

AuthorSchema.virtual("url").get(function () {
  return `/catalog/author/${this._id}`;
});

AuthorSchema.virtual("date_of_birth_formatted").get(function () {
  return this.date_of_birth
    ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED)
    : "";
});

AuthorSchema.virtual("date_of_death_formatted").get(function () {
  return this.date_of_death
    ? DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED)
    : "";
});

AuthorSchema.virtual("date_of_birth_iso").get(function () {
  return this.date_of_birth
    ? this.date_of_birth.toISOString().split("T")[0]
    : "";
});

AuthorSchema.virtual("date_of_death_iso").get(function () {
  return this.date_of_death
    ? this.date_of_death.toISOString().split("T")[0]
    : "";
});

module.exports = mongoose.model("Author", AuthorSchema);
