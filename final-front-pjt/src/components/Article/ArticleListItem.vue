<template>
    <tbody>
        <tr>
            <th scope="row">{{article.id}}</th>
            <td @click='goToDetail(article.id)'>{{article.title}}</td>
            <td>{{article.username}}</td>
            <td>{{formatDate(article.created_at)}}</td>
        </tr>
    </tbody>
</template>

<script>
export default {
    name:'ArticleListItem',
    props: {
        article: Object,
    },
    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
            return new Date(date).toLocaleDateString('en-US', options);
    },
        goToDetail(articleId) {
            this.$router.push({ name: 'CommunityDetailView', params: { id: articleId } })
        }
    
    }
}
</script>

<style>

</style>