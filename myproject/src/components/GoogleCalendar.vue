<template>
    <div>
        <head>
            <title>Google Calendar API Quickstart</title>
            <meta charset="utf-8" />
        </head>

        <p>Google Calendar API Quickstart</p>
        <button id="authorize_button" style="display: none;">Authorize</button>
    </div>
</template>

<script>
    import gapi from "./gapi"
    export default {
        name: "GoogleCalendar",
        data(){
            return{
                userEvents: []
            }
        },
        methods: {
            async getCalender(){
                const events = await gapi.client.calendar.events.list({
                    calendarId: 'primary',
                    timeMin: new Date().toISOString(),
                    showDeleted: false,
                    singleEvents: true,
                    maxResults: 10,
                    orderBy: 'startTime'
                })
                console.log(events)
                this.userEvents = events.result.items;
            }
        }
    }
</script>

<style scoped>

</style>
