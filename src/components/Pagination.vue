<template>
  <div class="pagination">
    <div v-for="row of innerData" :key="row.id">
      <slot name="row" :row="row" :id="row.id"></slot>
    </div>

    <div v-if="showPagination" class="pagination__pages-list">
      <div v-for="page of pages" :key="page">
        <div
          class="pagination__page-number"
          :class="{ 'pagination__page-number_active': page === selectedPage }"
          @click="setPage(page)"
        >
          {{ page }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    perPage: {
      type: Number,
      default: 5
    }
  },

  data() {
    return {
      selectedPage: 1
    };
  },

  computed: {
    innerData() {
      const from = (this.selectedPage - 1) * this.perPage;
      const items = this.perPage * this.selectedPage;
      return this.data.slice(from, items);
    },

    showPagination() {
      return this.data.length > this.perPage;
    },

    pages() {
      return Math.ceil(this.data.length / this.perPage);
    }
  },

  methods: {
    setPage(page) {
      this.selectedPage = page;
    }
  }
};
</script>

<style lang="scss">
.pagination {
  &__pages-list {
    display: flex;
    margin-top: 20px;
  }

  &__page-number {
    padding-right: 10px;
    cursor: pointer;
  }

  &__page-number_active {
    color: #4a76a8;
  }
}
</style>
