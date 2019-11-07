<template>
  <v-container pa-0 ma-0>
    <v-row>
      <v-col>
        <!-- <v-text-field label="Select Image" @click="pickFile" v-model="name" required readonly></v-text-field> -->
        <v-btn @click="pickFile">upload csv</v-btn>
        <input
          type="file"
          style="display: none"
          ref="fileInput"
          @change="onFilePicked"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <table>
          <tr>
            <input type="text" v-model="testJsonObject.a" />
            <td>오</td>
          </tr>
        </table>
      </v-col>
    </v-row>
    <v-row>
      <v-btn @click="showTestJsonObject">show TestJsonObject</v-btn>
    </v-row>
  </v-container>
</template>
<script src="./Excel.ts"></script>
<style lang="scss" scoped>
@import './Excel.scss';
</style>
