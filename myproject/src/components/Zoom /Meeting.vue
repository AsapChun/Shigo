<template>
    <div class="meeting">
        <div class="container-zoom">
            <CreateZoomMeeting :nickname="nickname" :meetingId="meetingId"/>
        </div>
    </div>
</template>

<script>
    import CreateZoomMeeting from "../../views/CreateZoomMeeting.vue";

    export default {
        name: "Meeting",
        data: function () {
            return {
                nickname: '',
                meetingId: '',
            }
        },
        components: {
            CreateZoomMeeting,
        },
        created : function (){
            this.nickname = this.$route.query.nickname;
            this.meetingId = this.$route.query.meetingId;
        }
    };
</script>

<style scoped>

</style>
