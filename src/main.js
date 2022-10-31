import "./style.css";
/* Import af Motion One bibliotek */
import { animate, inView, scroll, timeline } from "motion";

scroll(animate(".progress-bar", { scaleX: [0, 1] }));
