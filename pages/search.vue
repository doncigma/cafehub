<script>
    import { apiCaller } from '~/utils/apiHandler';

export default {
    data() {
        return {
            searchQuery: ""
        };
    },
    methods: {
        handleSearch() {
            if (this.searchQuery.trim()) {
                apiCaller(this.searchQuery);
            }
        }
    }
}
</script>

<template>
    <div>
        <UTextarea placeholder="Search cafes..." v-model="searchQuery" />
    </div>
</template>