<template>
    <v-main>
        <v-container class="py-8 px-6" fluid>
            <div class="d-flex justify-content-center">
                <h3>Results</h3>
            </div>
            <v-table class="table-container mt-5">
                <thead class=" bg-purple-lighten-5 ">
                    <tr>
                    <th class="text-center">
                        Sl No
                    </th>
                    <th class="text-center">
                        Name
                    </th>
                    <th class="text-center">
                        Examination
                    </th>
                    <th class="text-center">
                        SCORE
                    </th>
                    <th class="text-center">
                        MAX SCORE
                    </th>
                    <th class="text-center">
                        Result
                    </th>
                    </tr>
                </thead>
            <tbody class="text-center">
            <tr v-for="result in results" :key="result.id">
              <td>{{ result.id }}</td>
              <td>{{ result.Name }}</td>
              <td>{{ result.Subject + " - " + result.Category }}</td>
              <td>{{ result.Score }}</td>
              <td>{{ result.MaxScore }}</td>
              <td :class="textColor(result)">{{ resultPassOrFail(result) }}</td>
            </tr>
          </tbody>
        </v-table>
        </v-container>
    </v-main>
</template>

<script>
export default {
    data() {
        return {
            results: [
                {
                    id: 1,
                    Name: "Reshma",
                    Score: 5,
                    MaxScore: 10,
                    Category: "First-Internal-IV",
                    Subject: "DBMS",
                },
                {
                    id: 2,
                    Name: "Akhila",
                    Score: 9,
                    MaxScore: 10,
                    Category: "First-Internal-IV",
                    Subject: "Operating System",
                },
                {
                    id: 3,
                    Name: "Anu",
                    Score: 8,
                    MaxScore: 10,
                    Category: "First-Internal-IV",
                    Subject: "PhP",
                },
                {
                    id: 4,
                    Name: "Deva",
                    Score: 1,
                    MaxScore: 10,
                    Category: "First-Internal-IV",
                    Subject: "C++",
                },
            ],
        };
    },
    methods: {
        resultPassOrFail(result) {
            const percentage = (result.Score / result.MaxScore) * 100;
            return percentage >= 30 ? "Passed" : "Failed";
        },
        textColor(result) {
            if(this.resultPassOrFail(result) === "Passed") {
                return "text-success"
            }
            else {
                return "text-danger"
            }
        }
    },
};
</script>
