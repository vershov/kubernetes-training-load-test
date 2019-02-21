import http from 'k6/http';

export let options = {
    duration: "10m",
    vus: 100
};

export default function () {
    http.get("http://tomcat-sample/tomcat-sample/load.jsp");
};