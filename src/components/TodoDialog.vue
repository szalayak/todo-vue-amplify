<template>
  <v-dialog v-model="isOpen" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="8" lg="6">
              <v-text-field
                v-model="editableAttributes.text"
                :label="$t('text')"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="4" lg="6">
              <v-dialog ref="dialog" v-model="modal" persistent width="290px">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="formattedDeadline"
                    :label="$t('deadline')"
                    prepend-icon="mdi-calendar"
                    readonly
                    @blur="date = parseDate(editableAttributes.deadline)"
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal = false">
                    {{ $t("cancel") }}
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.dialog.save(date)">
                    {{ $t("ok") }}
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close">
          {{ $t("cancel") }}
        </v-btn>
        <v-btn color="blue darken-1" text @click="save">
          {{ $t("save") }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import moment from "moment";
import { DATE_FORMAT, DATE_ISO_FORMAT } from "../data";
export default {
  name: "todo-dialog",
  props: ["open", "item", "title"],
  data() {
    return {
      menu: false,
      date: "",
      modal: false,
      editableAttributes: {
        text: this.item.text,
        deadline: this.item.deadline
      }
    };
  },
  computed: {
    isOpen: {
      get: function() {
        return this.open;
      },
      set: function(value) {
        if (!value) this.$emit("closed");
      }
    },
    formattedDeadline: {
      get: function() {
        return moment(this.editableAttributes.deadline).format(DATE_FORMAT);
      },
      set: function(value) {
        this.editableAttributes.deadline = value;
      }
    }
  },
  watch: {
    date() {
      this.editableAttributes.deadline = this.formatDate(this.date);
    }
  },
  methods: {
    close() {
      this.$emit("closed");
    },
    save() {
      const changedAttributes = {};
      Object.keys(this.editableAttributes).forEach(attr => {
        if (this.item[attr] !== this.editableAttributes[attr])
          changedAttributes[attr] = this.editableAttributes[attr];
      });
      this.$emit("saved", changedAttributes);
    },
    formatDate(date) {
      return date ? moment(date, DATE_ISO_FORMAT).toDate() : moment().toDate();
    },
    parseDate(date) {
      return date
        ? moment(date).format(DATE_ISO_FORMAT)
        : moment().format(DATE_ISO_FORMAT);
    }
  }
};
</script>
