import React from "react";
import ss from "./Header.scss";

import logo from "@/assets/svg/iconQ.svg";
import inspireX from "@/assets/svg/inspireX.svg";

import search from "@/assets/svg/search.svg";

import MenuButton from "@/component/basic/MenuButton";

import Loki from "@/assets/product/loki.svg";

import grafana from "@/assets/product/grafana.svg";
import trace from "@/assets/product/trace.svg";
import metrics from "@/assets/product/metrics.svg";
import profiles from "@/assets/product/profiles.svg";



const Header: React.FC = () => {
  console.log(1);
  return (
    <div className={ss.frame}>
      <div className={ss.wrap}>
        <div>
          <a className={ss.logo_a}>
            <img src={logo} alt="logo" className={ss.logo} />
            <img src={inspireX} alt="inspireX" className={ss.inspireX} />
          </a>
        </div>
        <div className={ss.primary}>
          <div className={ss.primary_item}>Products</div>
          <div className={ss.primary_item}>Open Source</div>
          <div className={ss.primary_item}>Solutions</div>
          <div className={ss.primary_item}>Learn</div>
          <div className={ss.primary_item}>Docs</div>
          <div className={ss.primary_item}>Pricing</div>
        </div>
        <div className={ss.secondary}>
          <div className={ss.search_container}>
            <img src={search} alt="search" className={ss.search} />
          </div>
          <div className={ss.download}><span>Downloads</span></div>
          <div className={ss.contact_us}><span>Contact us</span></div>
          <div className={ss.download}><span>Sign in</span></div>
        </div>
        <div className={ss.mobile_container}>
          <div className={ss.search_container}>
            <img src={search} alt="search" className={ss.search} />
          </div>
          <MenuButton size={20} backgroundColor="#000" />
        </div>
      </div>
      <div className={ss.dropdown}>
        <div className={ss.dd_container}>
          <div className={ss.dd_container_item}>
            <div className={ss.dd_item_content}>
              <div className={ss.dd_item_title}>LGTM+ Stack</div>
              <div className={ss.dd_item_content_flex}>
                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={Loki} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Logs</div>
                      <div className={ss.desc}>powered by Grafana Loki</div>
                    </div>
                  </a>
                </div>

                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={grafana} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Grafana</div>
                      <div className={ss.desc}>for visualization</div>
                    </div>
                  </a>
                </div>

                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={trace} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Traces</div>
                      <div className={ss.desc}>powered by Grafana Tempo</div>
                    </div>
                  </a>
                </div>

                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={metrics} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Metrics</div>
                      <div className={ss.desc}>powered by Grafana Mimir and Prometheus</div>
                    </div>
                  </a>
                </div>

                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={profiles} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Profiles</div>
                      <div className={ss.desc}>powered by Grafana Pyroscope</div>
                    </div>
                  </a>
                </div>

              </div>
            </div>
          </div>
          
          <div className={ss.dd_container_item}>
            <div className={ss.dd_item_content}>
              <div className={ss.dd_item_title}>LGTM+ Stack</div>
              <div className={ss.dd_item_content_flex}>
                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={Loki} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Logs</div>
                      <div className={ss.desc}>powered by Grafana Loki</div>
                    </div>
                  </a>
                </div>

                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={grafana} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Grafana</div>
                      <div className={ss.desc}>for visualization</div>
                    </div>
                  </a>
                </div>

                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={trace} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Traces</div>
                      <div className={ss.desc}>powered by Grafana Tempo</div>
                    </div>
                  </a>
                </div>

                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={metrics} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Metrics</div>
                      <div className={ss.desc}>powered by Grafana Mimir and Prometheus</div>
                    </div>
                  </a>
                </div>

                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={profiles} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Profiles</div>
                      <div className={ss.desc}>powered by Grafana Pyroscope</div>
                    </div>
                  </a>
                </div>

              </div>
            </div>
          </div>

          <div className={ss.dd_container_item}>
            <div className={ss.dd_item_content}>
              <div className={ss.dd_item_title}>LGTM+ Stack</div>
              <div className={ss.dd_item_content_flex}>
                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={Loki} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Logs</div>
                      <div className={ss.desc}>powered by Grafana Loki</div>
                    </div>
                  </a>
                </div>

                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={grafana} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Grafana</div>
                      <div className={ss.desc}>for visualization</div>
                    </div>
                  </a>
                </div>

                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={trace} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Traces</div>
                      <div className={ss.desc}>powered by Grafana Tempo</div>
                    </div>
                  </a>
                </div>

                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={metrics} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Metrics</div>
                      <div className={ss.desc}>powered by Grafana Mimir and Prometheus</div>
                    </div>
                  </a>
                </div>

                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={profiles} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Profiles</div>
                      <div className={ss.desc}>powered by Grafana Pyroscope</div>
                    </div>
                  </a>
                </div>

              </div>
            </div>
          </div>

          <div className={ss.dd_container_item}>
            <div className={ss.dd_item_content}>
              <div className={ss.dd_item_title}>LGTM+ Stack</div>
              <div className={ss.dd_item_content_flex}>
                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={Loki} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Logs</div>
                      <div className={ss.desc}>powered by Grafana Loki</div>
                    </div>
                  </a>
                </div>

                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={grafana} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Grafana</div>
                      <div className={ss.desc}>for visualization</div>
                    </div>
                  </a>
                </div>

                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={trace} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Traces</div>
                      <div className={ss.desc}>powered by Grafana Tempo</div>
                    </div>
                  </a>
                </div>

                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={metrics} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Metrics</div>
                      <div className={ss.desc}>powered by Grafana Mimir and Prometheus</div>
                    </div>
                  </a>
                </div>

                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={profiles} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Profiles</div>
                      <div className={ss.desc}>powered by Grafana Pyroscope</div>
                    </div>
                  </a>
                </div>

              </div>
            </div>
          </div>

          <div className={ss.dd_container_item}>
            <div className={ss.dd_item_content}>
              <div className={ss.dd_item_title}>LGTM+ Stack</div>
              <div className={ss.dd_item_content_flex}>
                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={Loki} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Logs</div>
                      <div className={ss.desc}>powered by Grafana Loki</div>
                    </div>
                  </a>
                </div>

                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={grafana} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Grafana</div>
                      <div className={ss.desc}>for visualization</div>
                    </div>
                  </a>
                </div>

                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={trace} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Traces</div>
                      <div className={ss.desc}>powered by Grafana Tempo</div>
                    </div>
                  </a>
                </div>

                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={metrics} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Metrics</div>
                      <div className={ss.desc}>powered by Grafana Mimir and Prometheus</div>
                    </div>
                  </a>
                </div>

                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={profiles} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Profiles</div>
                      <div className={ss.desc}>powered by Grafana Pyroscope</div>
                    </div>
                  </a>
                </div>

              </div>
            </div>
          </div>

          <div className={ss.dd_container_item}>
            <div className={ss.dd_item_content}>
              <div className={ss.dd_item_title}>LGTM+ Stack</div>
              <div className={ss.dd_item_content_flex}>
                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={Loki} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Logs</div>
                      <div className={ss.desc}>powered by Grafana Loki</div>
                    </div>
                  </a>
                </div>

                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={grafana} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Grafana</div>
                      <div className={ss.desc}>for visualization</div>
                    </div>
                  </a>
                </div>

                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={trace} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Traces</div>
                      <div className={ss.desc}>powered by Grafana Tempo</div>
                    </div>
                  </a>
                </div>

                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={metrics} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Metrics</div>
                      <div className={ss.desc}>powered by Grafana Mimir and Prometheus</div>
                    </div>
                  </a>
                </div>

                <div>
                  <a href="/"  className={ss.dd_i_c_f_link}>
                    <img src={profiles} alt="icon" className={ss.icon}></img>
                    <div>
                      <div className={ss.title}>Profiles</div>
                      <div className={ss.desc}>powered by Grafana Pyroscope</div>
                    </div>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
