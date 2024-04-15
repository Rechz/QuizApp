<template>
    <v-main>
        <v-container class="py-8 px-6" fluid>
            <div class="justify-content-center"><h3>Subjects</h3></div>
            <div class="table-container mt-5">
          <v-table>
            <thead class=" bg-purple-lighten-5 ">
              <tr>
                <th class="text-center">
                  ID
                </th>
                <th class="text-center">
                  Subjects
                </th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr v-for="Subject in Subjects" :key="Subject.id">
                <td>{{ Subject.id }}</td>
                <td>{{ Subject.subject }}</td>
              </tr>
            </tbody>
          </v-table>
        </div>
        </v-container>
    </v-main>
</template>

<script>
  export default {
    data() {
      return {
        Subjects:[ 
 { 
 "id": 1, 
 "subject": "DBMS" 
 }, 
 { 
 "id": 2, 
 "subject": "Java" 
 }, 
 { 
 "id": 3, 
 "subject": "C++" 
 }, 
 { 
 "id": 4, 
 "subject": "Php" 
 }, 
 { 
 "id": 5, 
 "subject": "Computer Organization" 
 } 
] 
      };
    }
  };
  </script>
  
  <style scoped>
  .table-container {
    max-height: 440px; /* Adjust as needed */
    overflow-y: auto;
    width: 50%; /* Full width */
   margin-inline: auto;
  }
  </style>
  