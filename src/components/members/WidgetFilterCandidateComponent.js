import React from 'react'
import classes from './MemberGrid.module.css'

function WidgetCandidateComponent() {
    return (
        <div class={`${classes.widget} mt-3`}>
            <div class={`${classes.widgetTitle} ${classes.widgetCollapse}`}>
                <h6>Widget Filter</h6>
            </div>
            <div class="collapse show mt-2" id="dateposted">
                <div class={classes.widgetContent}>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="dateposted1" />
                        <label class="custom-control-label" for="dateposted1">Last hour</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="dateposted2" />
                        <label class="custom-control-label" for="dateposted2">Last 24 hour</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="dateposted3" />
                        <label class="custom-control-label" for="dateposted3">Last 7 days</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="dateposted4" />
                        <label class="custom-control-label" for="dateposted4">Last 14 days</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="dateposted5" />
                        <label class="custom-control-label" for="dateposted5">Last 30 days</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WidgetCandidateComponent
