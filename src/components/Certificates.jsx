import { Card, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import Title from "./Title";

export function Certificate() {
  return (
    <div className="mt-6 flex flex-col items-center">
      <Title>Certificates</Title>
      <div className="flex flex-row gap-6 mt-4">
        <Card className="w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Enterprise Design Thinking Practitioner
            </Typography>
            <Typography>
              The earner has acquired knowledge of applying Enterprise Design Thinking and its value.
            </Typography>
          </CardBody>
          <br />
          <CardFooter className="pt-0">
            <a
              href="https://www.credly.com/badges/97a76a2b-45ed-47ad-8fcb-68c851997007/linked_in_profile"
              className="inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" variant="text" className="flex items-center gap-2">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardFooter>
        </Card>
        <Card className="w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Generative AI Fundamentals
            </Typography>
            <Typography>
              The earner has acquired knowledge of Generative AI and its fundamentals.
            </Typography>
          </CardBody>
          <br />
          <CardFooter className="pt-0">
            <a
              href="https://www.cloudskillsboost.google/public_profiles/e42b8bce-878f-443d-b080-22504ffb3fdb/badges/5042972"
              className="inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" variant="text" className="flex items-center gap-2">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardFooter>
        </Card>
        <Card className="w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
            Prepare Data for ML APIs on Google Cloud
            </Typography>
            <Typography>
              The earner has acquired knowledge of ML APIs on Google Cloud.
            </Typography>
          </CardBody>
          <br />
          <CardFooter className="pt-0">
            <a
              href="https://www.cloudskillsboost.google/public_profiles/e42b8bce-878f-443d-b080-22504ffb3fdb/badges/5373904"
              className="inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" variant="text" className="flex items-center gap-2">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Certificate;