import tracer from 'dd-trace';
tracer.init({
    logInjection: true,
    profiling: true,
    appsec: true,
    runtimeMetrics: true
});
export default tracer;
